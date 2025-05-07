// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TomcatConfig extends $dara.Model {
  contextPath?: string;
  maxThreads?: number;
  port?: number;
  uriEncoding?: string;
  useBodyEncodingForUri?: boolean;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      contextPath: 'ContextPath',
      maxThreads: 'MaxThreads',
      port: 'Port',
      uriEncoding: 'UriEncoding',
      useBodyEncodingForUri: 'UseBodyEncodingForUri',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contextPath: 'string',
      maxThreads: 'number',
      port: 'number',
      uriEncoding: 'string',
      useBodyEncodingForUri: 'boolean',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

