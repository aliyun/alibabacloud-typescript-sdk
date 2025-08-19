// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCertRequest extends $dara.Model {
  /**
   * @example
   * 2024-05-13 12:59:45
   */
  afterDate?: string;
  /**
   * @example
   * 2025-09-04
   */
  beforeDate?: string;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 1ef79512-569b-6a4e-9105-9b91473562f7
   */
  instanceUuid?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * 1d2db86sca4384811e0b5e8707e68181f
   */
  nextToken?: string;
  /**
   * @example
   * 50
   */
  showSize?: number;
  /**
   * @example
   * ISSUE
   */
  status?: string;
  /**
   * @example
   * CLIENT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      afterDate: 'AfterDate',
      beforeDate: 'BeforeDate',
      currentPage: 'CurrentPage',
      instanceUuid: 'InstanceUuid',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      showSize: 'ShowSize',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterDate: 'string',
      beforeDate: 'string',
      currentPage: 'number',
      instanceUuid: 'string',
      maxResults: 'number',
      nextToken: 'string',
      showSize: 'number',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

