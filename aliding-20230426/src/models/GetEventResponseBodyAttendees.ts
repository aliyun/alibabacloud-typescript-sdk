// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEventResponseBodyAttendees extends $dara.Model {
  /**
   * @example
   * jack
   */
  displayName?: string;
  /**
   * @example
   * 123456
   */
  id?: string;
  /**
   * @example
   * true
   */
  isOptional?: boolean;
  /**
   * @example
   * accepted
   */
  responseStatus?: string;
  /**
   * @example
   * true
   */
  self?: boolean;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      id: 'Id',
      isOptional: 'IsOptional',
      responseStatus: 'ResponseStatus',
      self: 'Self',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      id: 'string',
      isOptional: 'boolean',
      responseStatus: 'string',
      self: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

