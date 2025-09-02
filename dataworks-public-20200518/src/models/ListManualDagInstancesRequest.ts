// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListManualDagInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the directed acyclic graph (DAG) for the manually triggered workflow. You can call the [RunManualDagNodes](https://help.aliyun.com/document_detail/212830.html) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 7000001231241
   */
  dagId?: string;
  /**
   * @remarks
   * The environment of Operation Center. Valid values: PROD and DEV.
   * 
   * This parameter is required.
   * 
   * @example
   * RPOD
   */
  projectEnv?: string;
  /**
   * @remarks
   * The name of the workspace to which the manually triggered workflow belongs. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to obtain the name.
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

