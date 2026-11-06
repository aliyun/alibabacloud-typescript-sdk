// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreviewTaskParametersResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The business date of the cycle. The value is a 13-digit UNIX timestamp in milliseconds.
   * 
   * @example
   * 1792425600000
   */
  bizdate?: number;
  /**
   * @remarks
   * The error message returned when the parsing for the cycle fails. This parameter is returned when Success is false and is not returned when Success is true.
   * 
   * @example
   * Failed to parse scheduling parameters. Check the parameter settings.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The complete script parameter string parsed for the cycle. Multiple parameters are separated by spaces. This parameter is returned when Success is true.
   * 
   * @example
   * para1=20261020 para2=00
   */
  parameters?: string;
  /**
   * @remarks
   * Specifies whether the scheduling parameters for the cycle are parsed successfully. Valid values:
   * - true: The parsing is successful.
   * - false: The parsing fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The simulated scheduled trigger time. The value is a 13-digit UNIX timestamp in milliseconds.
   * 
   * @example
   * 1792512000000
   */
  triggerTime?: number;
  static names(): { [key: string]: string } {
    return {
      bizdate: 'Bizdate',
      errorMessage: 'ErrorMessage',
      parameters: 'Parameters',
      success: 'Success',
      triggerTime: 'TriggerTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizdate: 'number',
      errorMessage: 'string',
      parameters: 'string',
      success: 'boolean',
      triggerTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewTaskParametersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The parameter preview results for each cycle.
   */
  items?: PreviewTaskParametersResponseBodyItems[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 22C97E95-F023-56B5-8852-B1A77A17XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': PreviewTaskParametersResponseBodyItems },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

