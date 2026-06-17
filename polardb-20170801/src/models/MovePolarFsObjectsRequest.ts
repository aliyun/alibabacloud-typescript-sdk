// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MovePolarFsObjectsRequestObjectsToMove extends $dara.Model {
  /**
   * @remarks
   * The destination path.
   * 
   * @example
   * /test1
   */
  destinationPath?: string;
  /**
   * @remarks
   * The source path.
   * 
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
  /**
   * @remarks
   * A list of files to move or rename.
   */
  objectsToMove?: MovePolarFsObjectsRequestObjectsToMove[];
  /**
   * @remarks
   * The PolarFs instance ID.
   * 
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

