// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScanTaskStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * The severities of the alert events handled by the virus detection task. Separate multiple severities with commas (,). The severities decrease in descending order. Valid values:
   * 
   * *   **serious**
   * *   **suspicious**
   * *   **remind**
   * 
   * @example
   * serious,suspicious,remind
   */
  levels?: string;
  static names(): { [key: string]: string } {
    return {
      levels: 'Levels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      levels: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

