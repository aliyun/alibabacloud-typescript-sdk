// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDirectoryTreeRequest extends $dara.Model {
  /**
   * @remarks
   * Directory type.
   * - Ad-hoc Query: tempCode
   * - Code Task: codeManage
   * - Offline Pipeline: offlinePipeline
   * - Pipeline Custom Component: offlinePipelineCustomPlugin
   * - Sync Task: dataX
   * - Real-time Meta Table: streamMeta
   * - Real-time Custom Source: streamCustomDataSource
   * - Real-time Compute Template: streamTemplate
   * - Resource Management: resourceManage
   * - Offline Function: udfResource
   * - Real-time Function: streamFunction
   * 
   * This parameter is required.
   * 
   * @example
   * codeManage
   */
  category?: string;
  /**
   * @remarks
   * Tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * Project ID.
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
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      opTenantId: 'number',
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

