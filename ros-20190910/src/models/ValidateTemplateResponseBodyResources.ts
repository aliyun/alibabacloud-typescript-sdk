// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValidateTemplateResponseBodyResources extends $dara.Model {
  /**
   * @remarks
   * The pattern in which the logical IDs of regular resources are formed.
   * 
   * If resources are defined in a ROS template, the following rules apply:
   * 
   * *   Resource whose definition does not contain `Count`: If the resource name defined in the template is `server`, the values of LogicalResourceIdPattern and `ResourcePath` are both `server`.``
   * *   Resource whose definition contains `Count`: If the resource name defined in the template is `server`, the value of LogicalResourceIdPattern is `server[*]`, and the value of `ResourcePath` is `server`.
   * 
   * If resources and [modules](https://www.terraform.io/language/modules) are defined in a Terraform template, the following rules apply:
   * 
   * *   Resource and module whose definitions do not contain [`count`](https://www.terraform.io/language/meta-arguments/count) or [`for_each`](https://www.terraform.io/language/meta-arguments/for_each): If the resource name defined in the template is `server`, the values of LogicalResourceIdPattern and `ResourcePath` are both `server`.``
   * *   Resource and module whose definitions contain [`count`](https://www.terraform.io/language/meta-arguments/count) or [`for_each`](https://www.terraform.io/language/meta-arguments/for_each): If the resource name defined in the template is `server`, the value of LogicalResourceIdPattern is `server[*]`, and the value of `ResourcePath` is `server`.
   * 
   * Examples of LogicalResourceIdPattern for resources in a Terraform template:
   * 
   * *   Valid values of LogicalResourceIdPattern if a resource belongs to the root module:
   * 
   *     *   `server`: In this case, `count` and `for_each` are not contained in the resource. The value of `ResourcePath` is `server`.
   *     *   `server[*]`: In this case, `count` or `for_each` is contained in the resource. The value of `ResourcePath` is `server`.
   * 
   * *   Valid values of LogicalResourceIdPattern if a resource belongs to a child module:
   * 
   *     *   `app.server`: In this case, `count` and `for_each` are not contained in the `app` module and the `server` resource. The value of `ResourcePath` is `app.server`.````
   *     *   `app.server[*]`: In this case, `count` or `for_each` is contained in the `server` resource, but `count` and `for_each` are not contained in the `app` module. The value of `ResourcePath` is `app.server`.
   *     *   `app[*].server`: In this case, `count` or `for_each` is contained in the `app` module, but `count` and `for_each` are not contained in the `server` resource. The value of `ResourcePath` is `app.server`.
   *     *   `app[*].server[*]`: In this case, `count` or `for_each` is contained in the `app` module and the `server` resource. The value of `ResourcePath` is `app.server`.````
   *     *   `app.app_group[*].server`: In this case, `count` or `for_each` is contained in the `app_group` module, but `count` and `for_each` are not contained in the `app` module and the `server` resource. The value of `ResourcePath` is `app.app_group.server`. The `app_group` module is a child module of the `app` module.````
   * 
   * @example
   * server
   */
  logicalResourceIdPattern?: string;
  /**
   * @remarks
   * The path of the regular resource. In most cases, the path of a regular resource is the same as the resource name.
   * 
   * @example
   * server
   */
  resourcePath?: string;
  /**
   * @remarks
   * The regular resource type.
   * 
   * @example
   * ALIYUN::ECS::InstanceGroup
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      logicalResourceIdPattern: 'LogicalResourceIdPattern',
      resourcePath: 'ResourcePath',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logicalResourceIdPattern: 'string',
      resourcePath: 'string',
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

