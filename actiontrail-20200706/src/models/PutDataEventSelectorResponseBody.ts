// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutDataEventSelectorResponseBody extends $dara.Model {
  /**
   * @example
   * [{"EventName":{"Equals":["GetObject","CopyObject","AppendObject"]},"ReadWriteType":"All","ServiceName":"Oss"}]
   */
  dataEventSelectors?: string;
  /**
   * @example
   * 243E1250-32DA-493B-9347-3C7EEE07****
   */
  requestId?: string;
  /**
   * @example
   * acs:actiontrail:cn-shanghai:159498693826****:trail/trail-name
   */
  trailArn?: string;
  static names(): { [key: string]: string } {
    return {
      dataEventSelectors: 'DataEventSelectors',
      requestId: 'RequestId',
      trailArn: 'TrailArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataEventSelectors: 'string',
      requestId: 'string',
      trailArn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

