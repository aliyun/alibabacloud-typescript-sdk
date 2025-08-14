// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMeterImsMpsAiUsageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The usage duration, in minutes.
   * 
   * @example
   * 644
   */
  duration?: number;
  /**
   * @remarks
   * The beginning time of usage. The value is a 10-digit timestamp.
   * 
   * @example
   * 1656950400
   */
  time?: number;
  /**
   * @remarks
   * The AI type. Valid values:
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      time: 'Time',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      time: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterImsMpsAiUsageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The usage statistics of IMS on AI processing of MPS.
   */
  data?: DescribeMeterImsMpsAiUsageResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0622C702-41BE-467E-AF2E-883D4517962E
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
      data: { 'type': 'array', 'itemType': DescribeMeterImsMpsAiUsageResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

