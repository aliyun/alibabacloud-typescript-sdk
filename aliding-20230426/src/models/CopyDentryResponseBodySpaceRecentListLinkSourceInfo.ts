// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CopyDentryResponseBodySpaceRecentListLinkSourceInfoIconUrl } from "./CopyDentryResponseBodySpaceRecentListLinkSourceInfoIconUrl";


export class CopyDentryResponseBodySpaceRecentListLinkSourceInfo extends $dara.Model {
  /**
   * @example
   * docx
   */
  extension?: string;
  iconUrl?: CopyDentryResponseBodySpaceRecentListLinkSourceInfoIconUrl;
  /**
   * @example
   * def
   */
  id?: string;
  /**
   * @example
   * 0
   */
  linkType?: number;
  /**
   * @example
   * def
   */
  spaceId?: string;
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      iconUrl: 'IconUrl',
      id: 'Id',
      linkType: 'LinkType',
      spaceId: 'SpaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      iconUrl: CopyDentryResponseBodySpaceRecentListLinkSourceInfoIconUrl,
      id: 'string',
      linkType: 'number',
      spaceId: 'string',
    };
  }

  validate() {
    if(this.iconUrl && typeof (this.iconUrl as any).validate === 'function') {
      (this.iconUrl as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

