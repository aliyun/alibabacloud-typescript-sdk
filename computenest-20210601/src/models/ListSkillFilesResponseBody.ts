// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillFilesResponseBodySkillFiles extends $dara.Model {
  /**
   * @remarks
   * The relative path of the file within the Skill.
   * 
   * @example
   * SKILL.md
   */
  filePath?: string;
  /**
   * @remarks
   * The pre-signed URL for accessing the file in OSS.
   * 
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
   * @remarks
   * The maximum number of entries returned per page.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to retrieve the next page of results. This token is returned only when more results are available.
   * 
   * @example
   * AAAAAWns8w4MmhzeptXVRG0PUEU=
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2849EE73-AFFA-5AFD-9575-12FA886451DA
   */
  requestId?: string;
  /**
   * @remarks
   * The Skill files.
   */
  skillFiles?: ListSkillFilesResponseBodySkillFiles[];
  /**
   * @remarks
   * The total number of entries that match the query.
   * 
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

