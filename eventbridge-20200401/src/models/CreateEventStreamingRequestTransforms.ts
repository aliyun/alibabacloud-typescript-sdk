// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEventStreamingRequestTransforms extends $dara.Model {
  /**
   * @example
   * acs:fc:cn-hangzhou:*****:services/demo-service.LATEST/functions/demo-func
   */
  arn?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

