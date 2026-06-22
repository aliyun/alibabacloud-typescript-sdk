// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteContainerPluginRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the container escape prevention rule is deleted. Valid values:
   * - **true**: The rule is deleted.
   * - **false**: The rule failed to be deleted.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The unique identifier that Alibaba Cloud generates for the request.
   * 
   * @example
   * A4EB8B1C-1DEC-5E18-BCD0-D1BBB3936FA7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

