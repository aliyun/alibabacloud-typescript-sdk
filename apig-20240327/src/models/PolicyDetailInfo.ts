// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PolicyDetailInfo extends $dara.Model {
  /**
   * @remarks
   * The policy class ID.
   * 
   * @example
   * cls-xxx
   */
  classId?: string;
  /**
   * @remarks
   * The policy type name.
   * 
   * @example
   * RateLimit
   */
  className?: string;
  /**
   * @remarks
   * The policy configuration content (JSON string).
   * 
   * @example
   * {"rate":100,"burst":50}
   */
  config?: string;
  /**
   * @remarks
   * The policy description.
   * 
   * @example
   * 每秒限流100次
   */
  description?: string;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * my-rate-limit
   */
  name?: string;
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * plc-xxx
   */
  policyId?: string;
  static names(): { [key: string]: string } {
    return {
      classId: 'classId',
      className: 'className',
      config: 'config',
      description: 'description',
      name: 'name',
      policyId: 'policyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classId: 'string',
      className: 'string',
      config: 'string',
      description: 'string',
      name: 'string',
      policyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

