// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceTypesRequest extends $dara.Model {
  /**
   * @remarks
   * The entity type. Valid values:
   * 
   * *   All: all types of resources.
   * *   Resource (default): regular resources. For more information, see [Resources](https://help.aliyun.com/document_detail/28863.html).
   * *   DataSource: DataSource resources. For more information, see [DataSource resources](https://help.aliyun.com/document_detail/404753.html).
   * *   Module: modules.
   * 
   * @example
   * Resource
   */
  entityType?: string;
  /**
   * @remarks
   * The provider of the resource type. Valid values:
   * 
   * *   ROS (default): The resource type is provided by Resource Orchestration Service (ROS).
   * *   Self: The resource type is provided by you.
   * 
   * @example
   * ROS
   */
  provider?: string;
  /**
   * @remarks
   * The resource type. The resource type can contain letters, digits, colons (:), and asterisks (\\*). You can use an asterisk (\\*) to perform a fuzzy match.
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

