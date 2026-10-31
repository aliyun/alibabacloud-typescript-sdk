// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDirectoryTreeRequest extends $dara.Model {
  /**
   * @remarks
   * The directory type. Valid values:
   * - tempCode: Ad hoc query.
   * - codeManage: Code task.
   * - offlinePipeline: Offline pipeline.
   * - offlinePipelineCustomPlugin: Custom pipeline component.
   * - dataX: Synchronization task.
   * - streamMeta: Real-time metadata table.
   * - streamCustomDataSource: Real-time custom source.
   * - streamTemplate: Real-time computing template.
   * - resourceManage: Resource management.
   * - udfResource: Offline function.
   * - streamFunction: Real-time function.
   * 
   * This parameter is required.
   * 
   * @example
   * codeManage
   */
  category?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The ID of the operating user.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 7081229106458752
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      opTenantId: 'number',
      opUserId: 'string',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

