// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class EntityResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IEResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KWEResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReviewAnalysisResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SentimentResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextStructureResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TranslateResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WordPosResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WordSegmentResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("nlp", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  async entity(Domain: string): Promise<EntityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.entityWithOptions(Domain, headers, runtime);
  }

  async entityWithOptions(Domain: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<EntityResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<EntityResponse>(await this.doROARequest("Entity", "2018-04-08", "HTTPS", "POST", "AK", `/nlp/api/entity/${Domain}`, "none", req, runtime), new EntityResponse({}));
  }

  async iE(Domain: string): Promise<IEResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.iEWithOptions(Domain, headers, runtime);
  }

  async iEWithOptions(Domain: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<IEResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<IEResponse>(await this.doROARequest("IE", "2018-04-08", "HTTPS", "POST", "AK", `/nlp/api/ie/${Domain}`, "none", req, runtime), new IEResponse({}));
  }

  async kWE(Domain: string): Promise<KWEResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.kWEWithOptions(Domain, headers, runtime);
  }

  async kWEWithOptions(Domain: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<KWEResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<KWEResponse>(await this.doROARequest("KWE", "2018-04-08", "HTTPS", "POST", "AK", `/nlp/api/kwe/${Domain}`, "none", req, runtime), new KWEResponse({}));
  }

  async reviewAnalysis(Domain: string): Promise<ReviewAnalysisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.reviewAnalysisWithOptions(Domain, headers, runtime);
  }

  async reviewAnalysisWithOptions(Domain: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ReviewAnalysisResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<ReviewAnalysisResponse>(await this.doROARequest("ReviewAnalysis", "2018-04-08", "HTTPS", "POST", "AK", `/nlp/api/reviewanalysis/${Domain}`, "none", req, runtime), new ReviewAnalysisResponse({}));
  }

  async sentiment(Domain: string): Promise<SentimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.sentimentWithOptions(Domain, headers, runtime);
  }

  async sentimentWithOptions(Domain: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SentimentResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<SentimentResponse>(await this.doROARequest("Sentiment", "2018-04-08", "HTTPS", "POST", "AK", `/nlp/api/sentiment/${Domain}`, "none", req, runtime), new SentimentResponse({}));
  }

  async textStructure(Domain: string): Promise<TextStructureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.textStructureWithOptions(Domain, headers, runtime);
  }

  async textStructureWithOptions(Domain: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<TextStructureResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<TextStructureResponse>(await this.doROARequest("TextStructure", "2018-04-08", "HTTPS", "POST", "AK", `/nlp/api/textstructure/${Domain}`, "none", req, runtime), new TextStructureResponse({}));
  }

  async translate(Domain: string): Promise<TranslateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.translateWithOptions(Domain, headers, runtime);
  }

  async translateWithOptions(Domain: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<TranslateResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<TranslateResponse>(await this.doROARequest("Translate", "2018-04-08", "HTTP", "POST", "AK", `/nlp/api/translate/${Domain}`, "none", req, runtime), new TranslateResponse({}));
  }

  async wordPos(Domain: string): Promise<WordPosResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.wordPosWithOptions(Domain, headers, runtime);
  }

  async wordPosWithOptions(Domain: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<WordPosResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<WordPosResponse>(await this.doROARequest("WordPos", "2018-04-08", "HTTPS", "POST", "AK", `/nlp/api/wordpos/${Domain}`, "none", req, runtime), new WordPosResponse({}));
  }

  async wordSegment(Domain: string): Promise<WordSegmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.wordSegmentWithOptions(Domain, headers, runtime);
  }

  async wordSegmentWithOptions(Domain: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<WordSegmentResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<WordSegmentResponse>(await this.doROARequest("WordSegment", "2018-04-08", "HTTPS", "POST", "AK", `/nlp/api/wordsegment/${Domain}`, "none", req, runtime), new WordSegmentResponse({}));
  }

}
