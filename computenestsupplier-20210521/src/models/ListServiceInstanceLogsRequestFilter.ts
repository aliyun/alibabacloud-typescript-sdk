// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceInstanceLogsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The parameter name of the filter. You can specify one or more filters. Valid values:
   * 
   * *   StartTime: the start time of the log event.
   * *   EndTime: the end time of the ActionTrail event.
   * *   EventName: the name of the ActionTrail event.
   * *   ResourceName: the name of the ActionTrail resource.
   * *   ApplicationGroupName: the name of the application group.
   * 
   * @example
   * StartTime
   */
  name?: string;
  /**
   * @remarks
   * A value of the filter condition.
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

