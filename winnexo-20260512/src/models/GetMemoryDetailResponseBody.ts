// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMemoryDetailResponseBodyGroupsItems extends $dara.Model {
  /**
   * @remarks
   * The body of the automatic memory, excluding the YAML frontmatter.
   * 
   * @example
   * Prefers concise answers
   */
  content?: string;
  /**
   * @remarks
   * The additional description of the automatic memory. If no description is available, an empty string is returned.
   * 
   * @example
   * Preference summary from recent conversations
   */
  description?: string;
  /**
   * @remarks
   * The unique identifier of the automatic memory entry, which is a relative OSS path.
   * 
   * @example
   * user/example.md
   */
  id?: string;
  /**
   * @remarks
   * The title of the automatic memory, which is derived from the file metadata or file name.
   * 
   * @example
   * Sample preference
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      description: 'description',
      id: 'id',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      description: 'string',
      id: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMemoryDetailResponseBodyGroups extends $dara.Model {
  /**
   * @remarks
   * The last modification time of the group. The value is a UNIX timestamp in seconds. If no files exist, null is returned.
   * 
   * @example
   * 1720000000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The list of automatic memory entries under this type. If no entries exist, an empty array is returned.
   * 
   * @example
   * [{"id":"user/example.md","title":"Sample preference","content":"Prefers concise answers","description":"Preference summary from recent conversations"}]
   */
  items?: GetMemoryDetailResponseBodyGroupsItems[];
  /**
   * @remarks
   * The type of the automatic memory. Valid values: user, feedback, reference, and project.
   * 
   * @example
   * user
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      gmtModified: 'gmtModified',
      items: 'items',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtModified: 'number',
      items: { 'type': 'array', 'itemType': GetMemoryDetailResponseBodyGroupsItems },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMemoryDetailResponseBodyProfile extends $dara.Model {
  /**
   * @remarks
   * The full body of the manual memory. If the memory has never been saved, an empty string is returned.
   * 
   * @example
   * Sample manual memory
   */
  content?: string;
  /**
   * @remarks
   * Indicates whether profile.md exists. If the memory has never been saved, false is returned.
   * 
   * @example
   * true
   */
  exists?: boolean;
  /**
   * @remarks
   * The last modification time of profile.md. The value is a UNIX timestamp in seconds. If the file does not exist or its metadata cannot be obtained, null is returned.
   * 
   * @example
   * 1720000000
   */
  gmtModified?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      exists: 'exists',
      gmtModified: 'gmtModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      exists: 'boolean',
      gmtModified: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMemoryDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The list of groups for automatically collected memories. If no automatic memories exist, an empty array is returned.
   * 
   * @example
   * [{"type":"user","items":[{"id":"user/example.md","title":"Sample preference","content":"Prefers concise answers","description":"Preference summary from recent conversations"}],"gmtModified":1720000000}]
   */
  groups?: GetMemoryDetailResponseBodyGroups[];
  /**
   * @remarks
   * The error description.
   * 
   * @example
   * The current user is not an active member of the group cg_12345
   */
  message?: string;
  /**
   * @remarks
   * The manually added memory from profile.md. It includes the full content, existence status, and modification time.
   * 
   * @example
   * {"content":"Sample manual memory","exists":true,"gmtModified":1720000000}
   */
  profile?: GetMemoryDetailResponseBodyProfile;
  /**
   * @remarks
   * The request tracking ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      groups: 'groups',
      message: 'message',
      profile: 'profile',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      groups: { 'type': 'array', 'itemType': GetMemoryDetailResponseBodyGroups },
      message: 'string',
      profile: GetMemoryDetailResponseBodyProfile,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.groups)) {
      $dara.Model.validateArray(this.groups);
    }
    if(this.profile && typeof (this.profile as any).validate === 'function') {
      (this.profile as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

