// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRecordingRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. The status code 200 indicates a successful request, whereas others indicate a failed request.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The recording rule.
   * 
   * @example
   * --- groups: - name: "recording_demo"   rules:   - expr: "sum(jvm_memory_max_bytes)"     record: "rate_coredns_demo"
   */
  data?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9FEA6D00-317F-45E3-9004-7FB8B0B7****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
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

