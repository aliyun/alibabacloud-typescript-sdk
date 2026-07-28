// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of results per page. Default value: 20. Minimum value: 1. Maximum value: 200.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of the resource source. Valid values:
   * 
   * - ExportTaskId: resource export ID
   * 
   * - TaskId: Module execution task ID
   * 
   * - StatePath: the OSS path where the resource state is stored.
   * 
   * This parameter is required.
   * 
   * @example
   * TaskId
   */
  sourceType?: string;
  /**
   * @remarks
   * The specific value of the resource source.
   * 
   * - If sourceType is set to ExportTaskId, the format is ExportTaskId:Version.
   * 
   * - If sourceType is set to TaskId, the format is TaskId.
   * 
   * - If sourceType is set to StatePath, the format is the download URL of the State file.
   * 
   * This parameter is required.
   * 
   * @example
   * task-235436dsfdgd
   */
  sourceValue?: string;
  /**
   * @remarks
   * The specification that resource properties follow in the response. Valid values: CloudSpec, Terraform.
   * Default value: CloudSpec.
   * 
   * This parameter is required.
   * 
   * @example
   * CloudSpec
   */
  specType?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      sourceType: 'sourceType',
      sourceValue: 'sourceValue',
      specType: 'specType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      sourceType: 'string',
      sourceValue: 'string',
      specType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

