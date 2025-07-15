// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDomainMappingResponseBodyLiveDomainModelsLiveDomainModel extends $dara.Model {
  /**
   * @remarks
   * The domain name to which the queried domain name is mapped.
   * 
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @remarks
   * The type of the queried domain name. Valid values:
   * 
   * *   **vhost**: main streaming domain
   * *   **publish**: ingest domain
   * *   **play**: sub-streaming domain
   * 
   * @example
   * play
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainMappingResponseBodyLiveDomainModels extends $dara.Model {
  liveDomainModel?: DescribeLiveDomainMappingResponseBodyLiveDomainModelsLiveDomainModel[];
  static names(): { [key: string]: string } {
    return {
      liveDomainModel: 'LiveDomainModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveDomainModel: { 'type': 'array', 'itemType': DescribeLiveDomainMappingResponseBodyLiveDomainModelsLiveDomainModel },
    };
  }

  validate() {
    if(Array.isArray(this.liveDomainModel)) {
      $dara.Model.validateArray(this.liveDomainModel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainMappingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The mappings of the queried domain name.
   */
  liveDomainModels?: DescribeLiveDomainMappingResponseBodyLiveDomainModels;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F6CD8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      liveDomainModels: 'LiveDomainModels',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveDomainModels: DescribeLiveDomainMappingResponseBodyLiveDomainModels,
      requestId: 'string',
    };
  }

  validate() {
    if(this.liveDomainModels && typeof (this.liveDomainModels as any).validate === 'function') {
      (this.liveDomainModels as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

