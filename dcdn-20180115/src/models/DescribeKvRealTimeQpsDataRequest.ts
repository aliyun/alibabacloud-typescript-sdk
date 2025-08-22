// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeKvRealTimeQpsDataRequest extends $dara.Model {
  /**
   * @example
   * get
   */
  accessType?: string;
  /**
   * @example
   * 2022-08-10T15:59:59Z
   */
  endTime?: string;
  /**
   * @example
   * 60
   */
  interval?: string;
  /**
   * @example
   * 534167033424646***
   */
  namespaceId?: string;
  /**
   * @example
   * type
   */
  splitBy?: string;
  /**
   * @example
   * 2022-08-10T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      endTime: 'EndTime',
      interval: 'Interval',
      namespaceId: 'NamespaceId',
      splitBy: 'SplitBy',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
      endTime: 'string',
      interval: 'string',
      namespaceId: 'string',
      splitBy: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

