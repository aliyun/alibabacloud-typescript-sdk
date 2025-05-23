// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetFileResponseBodyDataFile } from "./GetFileResponseBodyDataFile";
import { GetFileResponseBodyDataNodeConfiguration } from "./GetFileResponseBodyDataNodeConfiguration";
import { GetFileResponseBodyDataResourceDownloadLink } from "./GetFileResponseBodyDataResourceDownloadLink";


export class GetFileResponseBodyData extends $dara.Model {
  file?: GetFileResponseBodyDataFile;
  nodeConfiguration?: GetFileResponseBodyDataNodeConfiguration;
  resourceDownloadLink?: GetFileResponseBodyDataResourceDownloadLink;
  static names(): { [key: string]: string } {
    return {
      file: 'File',
      nodeConfiguration: 'NodeConfiguration',
      resourceDownloadLink: 'ResourceDownloadLink',
    };
  }

  static types(): { [key: string]: any } {
    return {
      file: GetFileResponseBodyDataFile,
      nodeConfiguration: GetFileResponseBodyDataNodeConfiguration,
      resourceDownloadLink: GetFileResponseBodyDataResourceDownloadLink,
    };
  }

  validate() {
    if(this.file && typeof (this.file as any).validate === 'function') {
      (this.file as any).validate();
    }
    if(this.nodeConfiguration && typeof (this.nodeConfiguration as any).validate === 'function') {
      (this.nodeConfiguration as any).validate();
    }
    if(this.resourceDownloadLink && typeof (this.resourceDownloadLink as any).validate === 'function') {
      (this.resourceDownloadLink as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

