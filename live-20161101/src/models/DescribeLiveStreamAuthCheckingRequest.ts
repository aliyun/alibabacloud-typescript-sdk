// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamAuthCheckingRequest extends $dara.Model {
  /**
   * @remarks
   * The ingest domain or streaming domain.
   * 
   * This parameter is required.
   * 
   * @example
   * demo.aliyundoc.com
   */
  domainName?: string;
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The complete ingest URL or streaming URL. You can use the [URL generator](https://help.aliyun.com/document_detail/197400.html) to generate a URL.
   * 
   * This parameter is required.
   * 
   * @example
   * http://example.com/live/test.flv?auth_key=1664248******
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      ownerId: 'number',
      regionId: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

