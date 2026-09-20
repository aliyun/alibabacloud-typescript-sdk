// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetManualDagInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID of the DAG instance that triggers the manual workflow. You can call the [CreateManualDag](https://help.aliyun.com/document_detail/189728.html) operation to obtain instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 7000001231241
   */
  dagId?: string;
  /**
   * @remarks
   * The environment identifier of the Operation Center. Valid values: PROD (production environment) and DEV (development environment).
   * 
   * This parameter is required.
   * 
   * @example
   * RPOD
   */
  projectEnv?: string;
  /**
   * @remarks
   * The name of the workspace to which the manual workflow belongs. You can obtain the name on the workspace configuration page in the DataWorks console.
   * 
   * This parameter is required.
   * 
   * @example
   * test_workspace
   */
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      dagId: 'DagId',
      projectEnv: 'ProjectEnv',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dagId: 'string',
      projectEnv: 'string',
      projectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

