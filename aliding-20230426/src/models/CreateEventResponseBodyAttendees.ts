// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEventResponseBodyAttendees extends $dara.Model {
  displayName?: string;
  /**
   * @example
   * true
   */
  isOptional?: boolean;
  /**
   * @example
   * needsAction
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
      isOptional: 'IsOptional',
      responseStatus: 'ResponseStatus',
      self: 'Self',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
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

