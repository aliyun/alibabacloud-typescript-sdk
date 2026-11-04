// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublicListedSandboxResourceTags extends $dara.Model {
  /**
   * @example
   * project
   */
  tagKey?: string;
  /**
   * @example
   * demo
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'tagKey',
      tagValue: 'tagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublicListedSandbox extends $dara.Model {
  /**
   * @example
   * true
   */
  autoPause?: boolean;
  /**
   * @example
   * true
   */
  autoResume?: boolean;
  /**
   * @example
   * 2
   */
  cpu?: number;
  /**
   * @example
   * 2048
   */
  diskSize?: number;
  /**
   * @example
   * 2026-10-30T03:09:21.313Z
   */
  endAt?: string;
  /**
   * @example
   * 10240
   */
  memorySize?: number;
  /**
   * @example
   * rg-acfmwxqyrgwabcd
   */
  resourceGroupID?: string;
  resourceTags?: PublicListedSandboxResourceTags[];
  /**
   * @example
   * sbx-4a4356a4-b731-42c1-ba8e-650f725be098
   */
  sandboxID?: string;
  /**
   * @example
   * 2026-10-30T02:09:21.313Z
   */
  startedAt?: string;
  /**
   * @example
   * running
   */
  state?: string;
  /**
   * @example
   * 13b721e6-8cc8-5df2-af13-80316f7508af
   */
  teamID?: string;
  /**
   * @example
   * my-team
   */
  teamName?: string;
  /**
   * @example
   * us7dxqaezw5uu7aa2cm5
   */
  templateID?: string;
  /**
   * @example
   * my-base-template
   */
  templateName?: string;
  /**
   * @example
   * 123456789
   */
  userID?: string;
  static names(): { [key: string]: string } {
    return {
      autoPause: 'autoPause',
      autoResume: 'autoResume',
      cpu: 'cpu',
      diskSize: 'diskSize',
      endAt: 'endAt',
      memorySize: 'memorySize',
      resourceGroupID: 'resourceGroupID',
      resourceTags: 'resourceTags',
      sandboxID: 'sandboxID',
      startedAt: 'startedAt',
      state: 'state',
      teamID: 'teamID',
      teamName: 'teamName',
      templateID: 'templateID',
      templateName: 'templateName',
      userID: 'userID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPause: 'boolean',
      autoResume: 'boolean',
      cpu: 'number',
      diskSize: 'number',
      endAt: 'string',
      memorySize: 'number',
      resourceGroupID: 'string',
      resourceTags: { 'type': 'array', 'itemType': PublicListedSandboxResourceTags },
      sandboxID: 'string',
      startedAt: 'string',
      state: 'string',
      teamID: 'string',
      teamName: 'string',
      templateID: 'string',
      templateName: 'string',
      userID: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceTags)) {
      $dara.Model.validateArray(this.resourceTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

