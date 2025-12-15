// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAddonsResponseBodyAddons extends $dara.Model {
  /**
   * @remarks
   * The addon ID.
   * 
   * This parameter is required.
   * 
   * @example
   * Login-1.0-W4g****
   */
  addonId?: string;
  /**
   * @remarks
   * The addon description.
   */
  description?: string;
  /**
   * @remarks
   * The time when the addon was installed.
   * 
   * @example
   * 2024-08-22 18:11:17
   */
  installTime?: string;
  /**
   * @remarks
   * The addon label.
   */
  label?: string;
  /**
   * @remarks
   * The addon name.
   * 
   * This parameter is required.
   * 
   * @example
   * Login
   */
  name?: string;
  /**
   * @remarks
   * The addon state.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The addon version.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      addonId: 'AddonId',
      description: 'Description',
      installTime: 'InstallTime',
      label: 'Label',
      name: 'Name',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonId: 'string',
      description: 'string',
      installTime: 'string',
      label: 'string',
      name: 'string',
      status: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAddonsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the addons.
   */
  addons?: ListAddonsResponseBodyAddons[];
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page number of the returned page. Default value: 1
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      addons: 'Addons',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addons: { 'type': 'array', 'itemType': ListAddonsResponseBodyAddons },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.addons)) {
      $dara.Model.validateArray(this.addons);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

