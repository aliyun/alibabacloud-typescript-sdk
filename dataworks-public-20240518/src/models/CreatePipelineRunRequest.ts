// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePipelineRunRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the process.
   * 
   * @example
   * This is a OdpsSQL-node publishing process. The function is XXXX.
   */
  description?: string;
  /**
   * @remarks
   * The IDs of entities to which you want to apply the process.
   * 
   * >  A process can be applied to only a single entity and its child entities. If you specify multiple entities in the array, the process is applied only to the first entity in the array and its child entities. Make sure that the array in your request contains only one element. Extra elements will be ignored.
   * 
   * This parameter is required.
   */
  objectIds?: string[];
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID. You must configure this parameter to specify the DataWorks workspace to which the API operation is applied.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * Specifies whether to deploy or undeploy the entity. Valid values:
   * 
   * *   Online: deploys the entity.
   * *   Offline: undeploys the entity.
   * 
   * This parameter is required.
   * 
   * @example
   * Online
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      objectIds: 'ObjectIds',
      projectId: 'ProjectId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      objectIds: { 'type': 'array', 'itemType': 'string' },
      projectId: 'number',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.objectIds)) {
      $dara.Model.validateArray(this.objectIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

