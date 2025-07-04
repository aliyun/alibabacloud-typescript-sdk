// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTablesResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The state of the index table. Valid values: NEW, PUBLISH, IN_USE, NOT_USE, STOP_USE, RESTORE_USE, and FAIL. After an index is created in an OpenSearch Retrieval Engine Edition instance, the index enters the IN_USE state. If the first full index fails to be created in an OpenSearch Vector Search Edition instance of the new version, the index is in the FAIL state.
   * 
   * @example
   * IN_USE
   */
  indexStatus?: string;
  /**
   * @remarks
   * The index name.
   * 
   * @example
   * es_test_1b
   */
  name?: string;
  /**
   * @remarks
   * The state of the index table. Valid values: NEW, PUBLISH, IN_USE, NOT_USE, STOP_USE, RESTORE_USE, and FAIL. After an index is created in an OpenSearch Retrieval Engine Edition instance, the index enters the IN_USE state. If the first full index fails to be created in an OpenSearch Vector Search Edition instance of the new version, the index is in the FAIL state.
   * 
   * @example
   * IN_USE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      indexStatus: 'indexStatus',
      name: 'name',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexStatus: 'string',
      name: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

