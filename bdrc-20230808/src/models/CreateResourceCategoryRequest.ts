// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateResourceCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * The resource category name.
   * 
   * This parameter is required.
   * 
   * @example
   * My***ResourceCategory
   */
  resourceCategoryName?: string;
  /**
   * @remarks
   * The resource matcher.
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *    "type": "BOOL",
   *    "operator": "AND",
   *    "values": [
   *      {
   *        "type": "TAG",
   *        "operator": "EQUAL",
   *        "key": "key0",
   *        "values": [
   *          "value0"
   *        ]
   *      },
   *      {
   *        "type": "TAG",
   *        "operator": "KEY_EXIST",
   *        "key": "key1"
   *      },
   *      {
   *        "type": "TAG",
   *        "operator": "KEY_EXIST_NOT_EQUAL",
   *        "key": "key2",
   *        "values": [
   *          "value2-wrong"
   *        ]
   *      }
   *    ]
   *  }
   */
  resourceMatcher?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ACS::ECS::Instance
   * 
   * **if can be null:**
   * false
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceCategoryName: 'ResourceCategoryName',
      resourceMatcher: 'ResourceMatcher',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceCategoryName: 'string',
      resourceMatcher: 'string',
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

