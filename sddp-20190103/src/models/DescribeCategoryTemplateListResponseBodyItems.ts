// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class DescribeCategoryTemplateListResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * Current risk level ID.
   * 
   * @example
   * 5
   */
  currentRiskLevel?: number;
  /**
   * @remarks
   * Description information of the industry template.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * Industry template creation time.
   * 
   * @example
   * 1582992000000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * Industry template modification time.
   * 
   * @example
   * 1545277010000
   */
  gmtModified?: number;
  /**
   * @remarks
   * Unique identifier ID of the industry template.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * Maximum category level.
   * 
   * @example
   * 2
   */
  maxCategoryLevel?: number;
  /**
   * @remarks
   * Maximum risk level ID.
   * 
   * @example
   * 5
   */
  maxRiskLevel?: number;
  /**
   * @remarks
   * Name of the industry template.
   * 
   * @example
   * built-in template
   */
  name?: string;
  /**
   * @remarks
   * Status of the industry template. Values:
   * - **0**: Closed status.
   * - **1**: Enabled status, user\\"s current main template.
   * - **2**: Active status, both enabled and active templates can be applied to recognition tasks.
   * - **3**: General recognition model template status.
   * 
   * > Templates in enabled and active status can be used as the industry template ID parameter for [DescribeDataObjects](https://help.aliyun.com/document_detail/2399253.html).
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * Whether the industry template supports editing. Values:
   * - **0**: Not supported.
   * - **1**: Supported.
   * 
   * @example
   * 0
   */
  supportEdit?: number;
  /**
   * @remarks
   * Type of the industry template.
   * 
   * @example
   * 6
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      currentRiskLevel: 'CurrentRiskLevel',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      maxCategoryLevel: 'MaxCategoryLevel',
      maxRiskLevel: 'MaxRiskLevel',
      name: 'Name',
      status: 'Status',
      supportEdit: 'SupportEdit',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentRiskLevel: 'number',
      description: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      maxCategoryLevel: 'number',
      maxRiskLevel: 'number',
      name: 'string',
      status: 'number',
      supportEdit: 'number',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

