// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillFilesResponseBodySkillFiles extends $dara.Model {
  /**
   * @example
   * SKILL.md
   */
  filePath?: string;
  /**
   * @example
   * https://embedding-pic.oss-cn-beijing-internal.aliyuncs.com/SKILL.md
   */
  signedUrl?: string;
  static names(): { [key: string]: string } {
    return {
      filePath: 'FilePath',
      signedUrl: 'SignedUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filePath: 'string',
      signedUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillFilesResponseBody extends $dara.Model {
  /**
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAWns8w4MmhzeptXVRG0PUEU=
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2849EE73-AFFA-5AFD-9575-12FA886451DA
   */
  requestId?: string;
  skillFiles?: ListSkillFilesResponseBodySkillFiles[];
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      skillFiles: 'SkillFiles',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      skillFiles: { 'type': 'array', 'itemType': ListSkillFilesResponseBodySkillFiles },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.skillFiles)) {
      $dara.Model.validateArray(this.skillFiles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

