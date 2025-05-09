// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDAGVersionsResponseBodyDagVersionListDagVersion extends $dara.Model {
  /**
   * @remarks
   * The name of the task flow.
   * 
   * @example
   * Spark SQL
   */
  dagName?: string;
  /**
   * @remarks
   * The ID of the task flow owner.
   * 
   * @example
   * 51****
   */
  dagOwnerId?: string;
  /**
   * @remarks
   * The name of the task flow owner.
   * 
   * @example
   * name
   */
  dagOwnerNickName?: string;
  /**
   * @remarks
   * The ID of the previously published version.
   * 
   * @example
   * 2****
   */
  lastVersionId?: number;
  /**
   * @remarks
   * The description of the version.
   * 
   * @example
   * test_OSS
   */
  versionComments?: string;
  /**
   * @remarks
   * The ID of the version.
   * 
   * @example
   * 2****
   */
  versionId?: number;
  static names(): { [key: string]: string } {
    return {
      dagName: 'DagName',
      dagOwnerId: 'DagOwnerId',
      dagOwnerNickName: 'DagOwnerNickName',
      lastVersionId: 'LastVersionId',
      versionComments: 'VersionComments',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dagName: 'string',
      dagOwnerId: 'string',
      dagOwnerNickName: 'string',
      lastVersionId: 'number',
      versionComments: 'string',
      versionId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

