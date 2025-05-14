// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEventsViewResponseBodyEventsOrganizer extends $dara.Model {
  /**
   * @example
   * tony
   */
  displayName?: string;
  /**
   * @example
   * 012345
   */
  id?: string;
  /**
   * @example
   * accepted
   */
  responseStatus?: string;
  /**
   * @example
   * false
   */
  self?: boolean;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      id: 'Id',
      responseStatus: 'ResponseStatus',
      self: 'Self',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      id: 'string',
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

