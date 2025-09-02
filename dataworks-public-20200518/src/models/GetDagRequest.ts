// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDagRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the DAG. You can use one of the following method to obtain the ID:
   * 
   * *   Call the [RunCycleDagNodes](https://help.aliyun.com/document_detail/2780209.html) operation and obtain the value of the **Data** response parameter.
   * *   Call the [RunSmokeTest](https://help.aliyun.com/document_detail/2780210.html) operation and obtain the value of the **Data** response parameter.
   * *   Call the [RunManualDagNodes](https://help.aliyun.com/document_detail/2780218.html) operation and obtain the value of the **DagId** response parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 123141452344525
   */
  dagId?: number;
  /**
   * @remarks
   * The environment of the workspace. Valid values: PROD and DEV.
   * 
   * This parameter is required.
   * 
   * @example
   * PROD
   */
  projectEnv?: string;
  static names(): { [key: string]: string } {
    return {
      dagId: 'DagId',
      projectEnv: 'ProjectEnv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dagId: 'number',
      projectEnv: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

