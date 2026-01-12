// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProjectResponseBodyDataDatasetPolicy extends $dara.Model {
  accessId?: string;
  dir?: string;
  expire?: string;
  host?: string;
  policy?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      dir: 'Dir',
      expire: 'Expire',
      host: 'Host',
      policy: 'Policy',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      dir: 'string',
      expire: 'string',
      host: 'string',
      policy: 'string',
      signature: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectResponseBodyDataDataset extends $dara.Model {
  createTime?: string;
  id?: string;
  modifiedTime?: string;
  ossKey?: string;
  policy?: CreateProjectResponseBodyDataDatasetPolicy;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      id: 'Id',
      modifiedTime: 'ModifiedTime',
      ossKey: 'OssKey',
      policy: 'Policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      id: 'string',
      modifiedTime: 'string',
      ossKey: 'string',
      policy: CreateProjectResponseBodyDataDatasetPolicy,
    };
  }

  validate() {
    if(this.policy && typeof (this.policy as any).validate === 'function') {
      (this.policy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectResponseBodyDataSourcePolicy extends $dara.Model {
  accessId?: string;
  dir?: string;
  expire?: string;
  host?: string;
  policy?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      dir: 'Dir',
      expire: 'Expire',
      host: 'Host',
      policy: 'Policy',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      dir: 'string',
      expire: 'string',
      host: 'string',
      policy: 'string',
      signature: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectResponseBodyDataSource extends $dara.Model {
  ossKey?: string;
  policy?: CreateProjectResponseBodyDataSourcePolicy;
  static names(): { [key: string]: string } {
    return {
      ossKey: 'OssKey',
      policy: 'Policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossKey: 'string',
      policy: CreateProjectResponseBodyDataSourcePolicy,
    };
  }

  validate() {
    if(this.policy && typeof (this.policy as any).validate === 'function') {
      (this.policy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectResponseBodyData extends $dara.Model {
  createMode?: string;
  createTime?: string;
  dataset?: CreateProjectResponseBodyDataDataset;
  id?: string;
  intro?: string;
  method?: string;
  modifiedTime?: string;
  source?: CreateProjectResponseBodyDataSource;
  status?: string;
  title?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createMode: 'CreateMode',
      createTime: 'CreateTime',
      dataset: 'Dataset',
      id: 'Id',
      intro: 'Intro',
      method: 'Method',
      modifiedTime: 'ModifiedTime',
      source: 'Source',
      status: 'Status',
      title: 'Title',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createMode: 'string',
      createTime: 'string',
      dataset: CreateProjectResponseBodyDataDataset,
      id: 'string',
      intro: 'string',
      method: 'string',
      modifiedTime: 'string',
      source: CreateProjectResponseBodyDataSource,
      status: 'string',
      title: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.dataset && typeof (this.dataset as any).validate === 'function') {
      (this.dataset as any).validate();
    }
    if(this.source && typeof (this.source as any).validate === 'function') {
      (this.source as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectResponseBody extends $dara.Model {
  code?: string;
  data?: CreateProjectResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateProjectResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

