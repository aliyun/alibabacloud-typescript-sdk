// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDIJobRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated. Use the Id parameter instead.
   * 
   * @example
   * 11588
   * 
   * @deprecated
   */
  DIJobId?: number;
  /**
   * @remarks
   * The ID of the synchronization task.
   * 
   * @example
   * 11588
   */
  id?: number;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * You must configure this parameter to specify the DataWorks workspace to which the API operation is applied.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * Specifies whether to return detailed configuration information, including TransformationRules, TableMappings, and JobSettings. Valid values: true and false. Default value: true.
   * 
   * @example
   * true
   */
  withDetails?: boolean;
  static names(): { [key: string]: string } {
    return {
      DIJobId: 'DIJobId',
      id: 'Id',
      projectId: 'ProjectId',
      withDetails: 'WithDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobId: 'number',
      id: 'number',
      projectId: 'number',
      withDetails: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

