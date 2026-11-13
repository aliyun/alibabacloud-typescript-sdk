// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishProductResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The publication record ID, which identifies the publication relationship between the published API product and the target portal. You can query this ID in the response of ListProductPublications at /himarket/v1/products/{productId}/publications. You can also use this ID as the publicationId path parameter in UnpublishProduct to unpublish the publication record.
   * 
   * @example
   * publication-xxxxxxxx
   */
  publicationId?: string;
  static names(): { [key: string]: string } {
    return {
      publicationId: 'publicationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publicationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishProductResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: PublishProductResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 393E2630-DBE7-5221-AB35-9E740675491A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: PublishProductResponseBodyData,
      message: 'string',
      requestId: 'string',
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

