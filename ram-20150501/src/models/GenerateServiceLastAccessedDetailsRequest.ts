// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateServiceLastAccessedDetailsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * acs:ram::1234567890:user/test_user
   */
  arn?: string;
  /**
   * @example
   * SERVICE_LEVEL
   */
  granularity?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      granularity: 'Granularity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      granularity: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

