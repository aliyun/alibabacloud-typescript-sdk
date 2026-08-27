// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceTypesRequest extends $dara.Model {
  /**
   * @remarks
   * The entity type. Valid values:  
   * 
   * - All: all resource types.
   * 
   * - Resource (default): regular resource types. For more information, see [Resources](https://help.aliyun.com/document_detail/28863.html).
   * 
   * - DataSource: data source resource types. For more information, see [Data source resources](https://help.aliyun.com/document_detail/404753.html).
   * 
   * - Module: modules.
   * 
   * @example
   * Resource
   */
  entityType?: string;
  /**
   * @remarks
   * The resource type provider. Valid values:
   * - ROS (default): Resource Orchestration Service.
   * - Self: the user.
   * 
   * @example
   * ROS
   */
  provider?: string;
  /**
   * @remarks
   * The resource type. The value can contain uppercase and lowercase letters, digits, colons (:), and asterisks (\\*). If an asterisk is used, fuzzy match is performed.
   * 
   * @example
   * MODULE::MyOrganization::MyService::MyUsecase
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      entityType: 'EntityType',
      provider: 'Provider',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityType: 'string',
      provider: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

