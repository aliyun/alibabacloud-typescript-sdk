// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSAMLProvidersResponseBodySAMLProvidersSAMLProvider extends $dara.Model {
  arn?: string;
  createDate?: string;
  description?: string;
  SAMLProviderName?: string;
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      createDate: 'CreateDate',
      description: 'Description',
      SAMLProviderName: 'SAMLProviderName',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      createDate: 'string',
      description: 'string',
      SAMLProviderName: 'string',
      updateDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSAMLProvidersResponseBodySAMLProviders extends $dara.Model {
  SAMLProvider?: ListSAMLProvidersResponseBodySAMLProvidersSAMLProvider[];
  static names(): { [key: string]: string } {
    return {
      SAMLProvider: 'SAMLProvider',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SAMLProvider: { 'type': 'array', 'itemType': ListSAMLProvidersResponseBodySAMLProvidersSAMLProvider },
    };
  }

  validate() {
    if(Array.isArray(this.SAMLProvider)) {
      $dara.Model.validateArray(this.SAMLProvider);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSAMLProvidersResponseBody extends $dara.Model {
  isTruncated?: boolean;
  marker?: string;
  requestId?: string;
  SAMLProviders?: ListSAMLProvidersResponseBodySAMLProviders;
  static names(): { [key: string]: string } {
    return {
      isTruncated: 'IsTruncated',
      marker: 'Marker',
      requestId: 'RequestId',
      SAMLProviders: 'SAMLProviders',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isTruncated: 'boolean',
      marker: 'string',
      requestId: 'string',
      SAMLProviders: ListSAMLProvidersResponseBodySAMLProviders,
    };
  }

  validate() {
    if(this.SAMLProviders && typeof (this.SAMLProviders as any).validate === 'function') {
      (this.SAMLProviders as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

