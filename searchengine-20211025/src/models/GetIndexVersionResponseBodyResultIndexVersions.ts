// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIndexVersionResponseBodyResultIndexVersions extends $dara.Model {
  /**
   * @remarks
   * The ID of the offline deployment.
   * 
   * @example
   * " "
   */
  buildDeployId?: string;
  /**
   * @remarks
   * The current online version number.
   * 
   * @example
   * 1
   */
  currentVersion?: number;
  /**
   * @remarks
   * The name of the index table.
   * 
   * @example
   * table4
   */
  indexName?: string;
  /**
   * @remarks
   * The index versions.
   */
  versions?: number[];
  static names(): { [key: string]: string } {
    return {
      buildDeployId: 'buildDeployId',
      currentVersion: 'currentVersion',
      indexName: 'indexName',
      versions: 'versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildDeployId: 'string',
      currentVersion: 'number',
      indexName: 'string',
      versions: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.versions)) {
      $dara.Model.validateArray(this.versions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

