// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceRegistrationsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The name of the filter field. Valid values:
   * 
   * - ServiceId: The service ID.
   * 
   * - RegistrationId: The review request ID.
   * 
   * - Status: The service status. Valid values: Submitted, Approved, Rejected, Canceled, and Executed.
   * 
   * @example
   * Canceled
   */
  name?: string;
  /**
   * @remarks
   * The list of filter values.
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

export class ListServiceRegistrationsRequest extends $dara.Model {
  /**
   * @remarks
   * The filter.
   */
  filter?: ListServiceRegistrationsRequestFilter[];
  /**
   * @remarks
   * The number of entries to return on each page. Maximum value: 100. Default value: 20.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The query token. Set it to the NextToken value returned from the previous API call.
   * 
   * @example
   * BBBAAfu+XtuBE55iRLHEYYuojI4=
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': ListServiceRegistrationsRequestFilter },
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

