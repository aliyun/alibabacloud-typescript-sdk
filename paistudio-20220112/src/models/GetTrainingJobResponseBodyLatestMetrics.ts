// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTrainingJobResponseBodyLatestMetrics extends $dara.Model {
  /**
   * @example
   * loss
   */
  name?: string;
  /**
   * @example
   * 2024-07-10T11:49:47Z
   */
  timestamp?: string;
  /**
   * @example
   * 0.11
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      timestamp: 'Timestamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      timestamp: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

