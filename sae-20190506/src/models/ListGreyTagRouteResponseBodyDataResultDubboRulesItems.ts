// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGreyTagRouteResponseBodyDataResultDubboRulesItems extends $dara.Model {
  /**
   * @remarks
   * The comparison operator. Valid values: **>**, **<**, **>=**, **<=**, **==**, and **! =**.
   * 
   * @example
   * ==
   */
  cond?: string;
  /**
   * @remarks
   * The expression that is used to obtain the value of the parameter. The syntax of the expression must follow the standard of the SpEL. Valid values:
   * 
   * - **Empty**: obtains the value of the parameter.
   * - **.name**: obtains the name property of the parameter. This expression works the same way as args0.getName().
   * - **.isEnabled()**: obtains the enabled property of the parameter. This expression works the same way as args0.isEnabled().
   * - **[0]**: indicates that the value of the parameter is an array and obtains the first value of the array. This expression works the same way as args0[0]. This expression does not start with a period (.).
   * - **.get(0)**: indicates that the value of the parameter is a list and obtains the first value of the list. This expression works the same way as args0.get(0).
   * - **.get("key")**: indicates that the value of the parameter is a map and obtains the value of the key in the map. This expression works the same way as args0.get("key").  >  For more information about the expressions that are used to obtain parameter values, see  [Spring Expression Language (SpEL)](https://docs.spring.io/spring-integration/docs/current/reference/html/spel.html).
   * 
   * @example
   * .name
   */
  expr?: string;
  /**
   * @remarks
   * The index of the parameter. The value 0 indicates the first parameter.
   * 
   * @example
   * 0
   */
  index?: number;
  /**
   * @remarks
   * This parameter is not returned for Dubbo services.
   * 
   * @example
   * N/A
   */
  name?: string;
  /**
   * @remarks
   * The operator. Valid values:
   * 
   * - **rawvalue**: direct comparison.
   * - **list**: whitelist.
   * - **mod**: mods 100.
   * - **deterministic_proportional_steaming_division**: percentage.
   * 
   * @example
   * rawvalue
   */
  operator?: string;
  /**
   * @remarks
   * This parameter is not returned for Dubbo services.
   * 
   * @example
   * N/A
   */
  type?: string;
  /**
   * @remarks
   * The value of the parameter. This value is compared with the value that is obtained based on the **expr** and **index** parameters.
   * 
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      cond: 'cond',
      expr: 'expr',
      index: 'index',
      name: 'name',
      operator: 'operator',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cond: 'string',
      expr: 'string',
      index: 'number',
      name: 'string',
      operator: 'string',
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

