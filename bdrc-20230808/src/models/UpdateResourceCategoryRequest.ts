// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateResourceCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * Resource category ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rc-123****7890
   */
  resourceCategoryId?: string;
  /**
   * @remarks
   * Resource category name.
   * 
   * @example
   * My***ResourceCategory
   */
  resourceCategoryName?: string;
  /**
   * @remarks
   * Resource matcher.
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
  static names(): { [key: string]: string } {
    return {
      resourceCategoryId: 'ResourceCategoryId',
      resourceCategoryName: 'ResourceCategoryName',
      resourceMatcher: 'ResourceMatcher',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceCategoryId: 'string',
      resourceCategoryName: 'string',
      resourceMatcher: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

