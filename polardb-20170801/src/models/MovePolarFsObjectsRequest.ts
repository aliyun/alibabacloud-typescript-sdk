// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MovePolarFsObjectsRequestObjectsToMove extends $dara.Model {
  /**
   * @example
   * /test1
   */
  destinationPath?: string;
  /**
   * @example
   * /test
   */
  sourcePath?: string;
  static names(): { [key: string]: string } {
    return {
      destinationPath: 'DestinationPath',
      sourcePath: 'SourcePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationPath: 'string',
      sourcePath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MovePolarFsObjectsRequest extends $dara.Model {
  objectsToMove?: MovePolarFsObjectsRequestObjectsToMove[];
  /**
   * @example
   * pfs-test*****
   */
  polarFsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      objectsToMove: 'ObjectsToMove',
      polarFsInstanceId: 'PolarFsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectsToMove: { 'type': 'array', 'itemType': MovePolarFsObjectsRequestObjectsToMove },
      polarFsInstanceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.objectsToMove)) {
      $dara.Model.validateArray(this.objectsToMove);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

