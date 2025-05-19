// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListContactGroupResponseBodyContactGroups } from "./ListContactGroupResponseBodyContactGroups";


export class ListContactGroupResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  contactGroups?: ListContactGroupResponseBodyContactGroups;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * 2
   */
  nextToken?: number;
  /**
   * @example
   * D3D03B0A-CF1A-4DAB-BF0D-D4B6ACD5677A
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      contactGroups: 'ContactGroups',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      contactGroups: ListContactGroupResponseBodyContactGroups,
      message: 'string',
      nextToken: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(this.contactGroups && typeof (this.contactGroups as any).validate === 'function') {
      (this.contactGroups as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

