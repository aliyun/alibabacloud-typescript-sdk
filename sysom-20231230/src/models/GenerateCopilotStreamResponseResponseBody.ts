// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateCopilotStreamResponseResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * SysomOpenAPI.ServerError
   */
  code?: string;
  /**
   * @remarks
   * The data returned by the LLM service. The data is of the string type. If it is a dict, convert and parse it yourself.
   * 
   * @example
   * {\\"choices\\": [{\\"finish_reason\\": \\"stop\\", \\"index\\": 0, \\"message\\": {\\"content\\": \\"Alinux is a Linux-based open-source operating system primarily developed and maintained by Alibaba Group, designed specifically for large-scale cloud computing and big data processing environments. The system has been deeply customized and optimized for high concurrency, low latency, and resource utilization to meet the complex and massive business demands within Alibaba. Due to its excellent performance and stability, Alinux has gradually been adopted by external enterprises and research institutions, particularly in areas that require handling high-load scenarios. Compared to standard Linux distributions, Alinux may include specific kernel patches, optimization toolsets, and other features developed internally by Alibaba. However, it is worth noting that although the "Ali" in the name may suggest a close relationship with Alibaba, Alinux as a project became a sub-project under the OpenAtom Foundation in 2021, known as OpenAnolis, marking its progression toward community-driven and broader adoption.\\", \\"role\\": \\"assistant\\"}}], \\"model\\": \\"Qwen1.5\\", \\"sentiment\\": [], \\"status_code\\": 200, \\"time\\": 6.836989402770996, \\"usage\\": {\\"completion_tokens\\": 180, \\"prompt_tokens\\": 176, \\"time_dict\\": {\\"auto_regression_time\\": 0.03798324399524265, \\"speed\\": 26.327398474054736, \\"total_generate_time\\": 6.836983919143677}, \\"total_tokens\\": 356}}
   */
  data?: string;
  /**
   * @remarks
   * The error code description. This field is empty if no error occurs.
   * 
   * @example
   * Requests for llm service failed
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2D693121-C925-5154-8DF6-C09A8B369822
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
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

