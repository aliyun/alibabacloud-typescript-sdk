// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGreyTagRouteResponseBodyDataAlbRulesItems extends $dara.Model {
  /**
   * @remarks
   * Valid value: ==.
   * 
   * @example
   * ==
   */
  cond?: string;
  /**
   * @remarks
   * This parameter is not returned for applications that are associated with ALB instances.
   * 
   * @example
   * N/A
   */
  expr?: string;
  /**
   * @remarks
   * This parameter is not returned for applications that are associated with Application Load Balancer (ALB) instances.
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
   * example
   */
  name?: string;
  /**
   * @remarks
   * The operator. Valid value: **rawvalue**. This value indicates direct comparison.
   * 
   * @example
   * rawvalue
   */
  operator?: string;
  /**
   * @remarks
   * The type of the comparison. Valid values:
   * 
   * *   **sourceIp**: SourceIp
   * *   **cookie**: cookie
   * *   **header**: header
   * 
   * @example
   * cookie
   */
  type?: string;
  /**
   * @remarks
   * The value of the parameter. This value is compared with the value that is obtained based on the type and name parameters.
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

