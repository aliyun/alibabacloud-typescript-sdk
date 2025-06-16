// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFailoverTestJobsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The filter key. Valid values:
   * 
   * *   **JobId**
   * *   **JobName**
   * *   **JobStatus**
   * *   **ResourceId**
   * *   **ResourceName**
   * *   **ResourceType**
   * 
   * > You can specify at most five different filter keys. If you specify ResourceId or ResourceName, you must also specify ResourceType. The logical operator among the filter keys is AND. Results that meet all specified filter keys are returned.
   * 
   * @example
   * JobId
   */
  key?: string;
  /**
   * @remarks
   * The value of the filter key.
   * 
   * > You can specify at most five filter values for each filter key. The logical operator among filter values is OR. If a filter value is matched, the filter key is considered matched.
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

