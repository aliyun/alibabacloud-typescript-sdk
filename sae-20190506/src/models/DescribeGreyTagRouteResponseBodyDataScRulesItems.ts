// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGreyTagRouteResponseBodyDataScRulesItems extends $dara.Model {
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
   * This parameter is not returned for Spring Cloud applications.
   * 
   * @example
   * N/A
   */
  expr?: string;
  /**
   * @remarks
   * This parameter is not returned for Spring Cloud applications.
   * 
   * @example
   * N/A
   */
  index?: number;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The operator. Valid values:
   * 
   * *   **rawvalue**: direct comparison.
   * *   **list**: whitelist.
   * *   **mod**: mods 100.
   * *   **deterministic_proportional_steaming_division**: percentage.
   * 
   * @example
   * rawvalue
   */
  operator?: string;
  /**
   * @remarks
   * The type of the comparison. Valid values:
   * 
   * *   **param**: parameter
   * *   **cookie**: cookie
   * *   **header**: header
   * 
   * @example
   * cookie
   */
  type?: string;
  /**
   * @remarks
   * The value of the parameter. This value is compared with the value that is obtained based on the **type** and **name** parameters.
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

