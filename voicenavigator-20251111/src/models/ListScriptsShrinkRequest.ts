// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScriptsShrinkRequest extends $dara.Model {
  /**
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66a
   */
  instanceId?: string;
  name?: string;
  /**
   * @example
   * 13816111993
   */
  number?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  scriptIdsShrink?: string;
  /**
   * @example
   * DRAFT
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      name: 'Name',
      number: 'Number',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      scriptIdsShrink: 'ScriptIds',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
      number: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      scriptIdsShrink: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

