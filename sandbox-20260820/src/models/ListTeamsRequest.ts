// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTeamsRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * pro
   */
  plan?: string;
  /**
   * @example
   * rg-acfmwxqyrgwabcd
   */
  resourceGroupID?: string;
  /**
   * @example
   * 开发团队
   */
  teamName?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      plan: 'plan',
      resourceGroupID: 'resourceGroupID',
      teamName: 'teamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      plan: 'string',
      resourceGroupID: 'string',
      teamName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

