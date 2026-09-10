// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMaintainWindowsRequest extends $dara.Model {
  /**
   * @example
   * asc
   */
  direction?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * 123-12-312-31-23123
   */
  maintainWindowId?: string;
  /**
   * @example
   * test
   */
  maintainWindowName?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * 123123***
   */
  nextToken?: string;
  /**
   * @example
   * enable
   */
  orderBy?: string;
  /**
   * @example
   * workspace-test
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'direction',
      enable: 'enable',
      maintainWindowId: 'maintainWindowId',
      maintainWindowName: 'maintainWindowName',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      orderBy: 'orderBy',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      enable: 'boolean',
      maintainWindowId: 'string',
      maintainWindowName: 'string',
      maxResults: 'number',
      nextToken: 'string',
      orderBy: 'string',
      workspace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

