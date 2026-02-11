// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchRetcodeAppByPageResponseBodyPageBeanRetcodeApps extends $dara.Model {
  appId?: number;
  appName?: string;
  createTime?: number;
  pid?: string;
  regionId?: string;
  type?: string;
  updateTime?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      createTime: 'CreateTime',
      pid: 'Pid',
      regionId: 'RegionId',
      type: 'Type',
      updateTime: 'UpdateTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appName: 'string',
      createTime: 'number',
      pid: 'string',
      regionId: 'string',
      type: 'string',
      updateTime: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchRetcodeAppByPageResponseBodyPageBean extends $dara.Model {
  pageNumber?: number;
  pageSize?: number;
  retcodeApps?: SearchRetcodeAppByPageResponseBodyPageBeanRetcodeApps[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      retcodeApps: 'RetcodeApps',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      retcodeApps: { 'type': 'array', 'itemType': SearchRetcodeAppByPageResponseBodyPageBeanRetcodeApps },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.retcodeApps)) {
      $dara.Model.validateArray(this.retcodeApps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchRetcodeAppByPageResponseBody extends $dara.Model {
  pageBean?: SearchRetcodeAppByPageResponseBodyPageBean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageBean: 'PageBean',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageBean: SearchRetcodeAppByPageResponseBodyPageBean,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pageBean && typeof (this.pageBean as any).validate === 'function') {
      (this.pageBean as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

